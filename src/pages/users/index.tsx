import React from 'react';
import { Table, Tag, Space } from 'antd';
import { connect } from 'umi'
import moment from 'moment';
import styles from './index.less'
const UserIndex = ({users}) =>  {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Create Time',
        dataIndex: 'create_time',
        key: 'create_time',
        render : (time) => (
          moment(time).format('YYYY-MM-DD hh:mm')
        )
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Edit </a> 
            <a>Delete</a>
          </Space>
        ),
      },
    ];  
    return (
      <div className={styles.tableList}>
         <Table columns={columns} dataSource={users.data} />
      </div>
     
    );
  }
  const mapStateToProps = ({users}) => {
    return {
      users,
    };
  };

  export default connect(mapStateToProps)(UserIndex);
 


