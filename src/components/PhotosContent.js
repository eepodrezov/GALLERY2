import React from 'react'
import style from './modules/PhotosContent.module.css'
import PhotosPagination from './PhotosPagination'
import Photo from './Photo'
import API from '../utils/API'






export default function PhotosContent({ value }) {
    const [data, setData] = React.useState([]);
    const [page, currPage] = React.useState();
    const [pageCount, setPageCount] = React.useState();

    const changePage = (newPage) => {
        currPage(newPage);
    }

    const isNew = (value) => {
        if (value === "New"){
            return true
        }else {return false} 
    }
    const isPopular = (value) => {
        if (value === "Popular"){
            return true
        }else {return false} 
    }

    React.useEffect(() => {
        (async () => {
            const result = await API.get(`/photos`, {params: {
                page: page,
                limit: 1,
                new: isNew(value),
                popular: isPopular(value)
            }});
            const nameArr = result.data.data.map(function (el) {
                return el.image.name
            });
            setPageCount(result.data.countOfPages);
            setData(nameArr);
        })()

    }, [page]);

    return (
        <div className={style.container}>
            <div className={style.gallery}>
                {data.map(el => (
                    <div className={style.photo}>
                        <img src={`http://gallery.dev.webant.ru/media/${el}`} alt="" />
                    </div >
                ))}
                <PhotosPagination handler={changePage} pageCount={pageCount}/>
            </div>
        </div>
    )
}

