import React from 'react';

import MaterialTable from 'material-table';

const TableContent = (props) => {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        options={{
          rowStyle: {
            backgroundColor: '#EEE',
          },
          headerStyle: {
            backgroundColor: '#039be5',
            color: '#FFF',
          },
        }}
        columns={[
          { title: 'Id', field: 'id' },
          { title: 'Name', field: 'name' },
          //  { title: 'Cargo', field: 'cargo' },
          { title: 'Mode', field: 'mode' },
          { title: 'Type', field: 'type' },
          { title: 'Destination', field: 'destination' },
          { title: 'Origin', field: 'origin' },
          { title: 'Total', field: 'total' },
          { title: 'Status', field: 'status' },
          { title: 'UserId', field: 'userId' },
        ]}
        data={props.shipments}
        title="Shipments Data"
      />
    </div>
  );
};

export default TableContent;
