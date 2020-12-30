package com.hoo.codegenerator.server.core.api;

import com.alibaba.druid.util.JdbcConstants;
import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.builder.ConfigBuilder;
import com.baomidou.mybatisplus.generator.config.rules.DateType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.hoo.codegenerator.server.common.model.Res;
import com.hoo.codegenerator.server.core.bean.pojo.StandardCodeGenParams;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

/**
 * 代码生成处理控制器
 *
 * @author hank
 * @create 2019-10-11 下午8:19
 **/
@RestController
@RequestMapping("api/code")
public class CodeController {

    protected Logger logger = LoggerFactory.getLogger(this.getClass());

    /**
     * 标准 ddl 代码生成
     * @param params
     * @return
     */
    @RequestMapping("standard")
    public Res standard(@RequestBody StandardCodeGenParams params) {
        logger.debug("参数:{}", params);
        params.validate();

        DbType dbType = getDbType(params);
        if(dbType == null) {
            throw new IllegalArgumentException("不支持该类型数据库");
        }
        GlobalConfig globalConfig = new GlobalConfig();
        globalConfig.setDateType(DateType.ONLY_DATE);
        globalConfig.setAuthor(params.getAuthor());
        DataSourceConfig dataSourceConfig = new DataSourceConfig();
        dataSourceConfig.setDbType(dbType);
        StrategyConfig strategyConfig = new StrategyConfig();
        strategyConfig.setNaming(NamingStrategy.underline_to_camel);
        if (params.getTablePrefix() != null && params.getTablePrefix().length > 0) {
            strategyConfig.setTablePrefix(params.getTablePrefix());
        }
        PackageConfig packageConfig = new PackageConfig();
        packageConfig.setParent(params.getPazkage());
        packageConfig.setModuleName(params.getModuleName());
        // if(){}

        DdlConfig ddlConfig = new DdlConfig();
        ddlConfig.setDbType(dbType);
        ddlConfig.setDdl(params.getSqlDdl());

        Set<String> removeSet = new HashSet<String>(){{
            add("com.baomidou.mybatisplus.annotation.IdType");
            add("com.baomidou.mybatisplus.annotation.TableId");
        }};

        try {
            ConfigBuilder config = new ConfigBuilder(packageConfig, ddlConfig, strategyConfig, null, globalConfig);
            for(int i=0,len = config.getTableInfoList().size();i<len;i++) {
                config.getTableInfoList().get(i).getImportPackages().removeAll(removeSet);
            }
            return Res.data(config);
        } catch (Exception e) {
            throw new RuntimeException("SQL解析错误，请检查SQL语法");
        }
    }

    private DbType getDbType(StandardCodeGenParams params) {
        switch (params.getDbType()) {
            case JdbcConstants.MYSQL:
                return DbType.MYSQL;
            case JdbcConstants.ORACLE:
                return DbType.ORACLE;
            case JdbcConstants.POSTGRESQL:
                return DbType.POSTGRE_SQL;
            case JdbcConstants.SQL_SERVER:
                return DbType.SQL_SERVER;

            case JdbcConstants.MARIADB:
                return DbType.MARIADB;
            case JdbcConstants.DB2:
                return DbType.DB2;
            case JdbcConstants.H2:
                return DbType.H2;
            case JdbcConstants.HSQL:
                return DbType.HSQL;
            case JdbcConstants.SQLITE:
                return DbType.SQLITE;
            case JdbcConstants.DM:
                return DbType.DM;
        }
        return null;
    }
}
