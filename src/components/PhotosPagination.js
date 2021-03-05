import React from 'react'
import { Pagination } from 'antd';

const PhotosPagination = ({handler, pageCount}) => {    

    const onChange = page => {
        handler(page);
    };
        return (
            <div style={{ marginTop: '200px' }}>
                <Pagination
                    onChange={onChange}
                    total={pageCount}
                    defaultCurrent={1}
                />
            </div>
        )
    }


export default PhotosPagination;