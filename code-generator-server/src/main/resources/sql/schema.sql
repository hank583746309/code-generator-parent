-- 建表语句

CREATE TABLE t_codegen_tpl (
tpl_id int PRIMARY KEY NOT NULL,
group_id int DEFAULT NULL,
title varchar(255) DEFAULT NULL,
content CLOB DEFAULT NULL,
suffix varchar(255) DEFAULT NULL,
create_by int DEFAULT NULL,
update_by int DEFAULT NULL,
create_time varchar DEFAULT NULL,
update_time varchar DEFAULT NULL
);

CREATE TABLE t_codegen_tpl_group (
  group_id int PRIMARY KEY NOT NULL,
  group_name varchar(255) DEFAULT NULL,
  access varchar(255) DEFAULT NULL,
  remark varchar(255) DEFAULT NULL,
  create_by int DEFAULT NULL,
  update_by int DEFAULT NULL,
  create_time varchar DEFAULT NULL,
  update_time varchar DEFAULT NULL
);
