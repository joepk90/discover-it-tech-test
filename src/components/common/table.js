import React from 'react';
import TableHeader from 'src/components/common/tableHeader';
import TableBody from 'src/components/common/tableBody';

const Table = ({ columns, onSort, sortColumn, data }) => {

    return (
        <table className="table table-bordered table-striped table-responsive-stack">
            <TableHeader
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
            />

            <TableBody
                data={data}
                columns={columns}
            />

        </table>
    );

}

export default Table;