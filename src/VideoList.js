import React from 'react';

export const VideoList = (props) => {

    const renderList = () => {
        var list = props.videos.map(video => {
            return (
                <>
                    <div className=''>
                        <li
                            className="cursor-pointer flex rounded-lg overflow-hidden shadow-md hover:shadow-lg ml-[12vh] transition-shadow"
                            onClick={() => props.updateSelectedVideo(video)}
                            key={video.etag}
                        >
                            <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" className="md:w-[168px] w-[230px] md:h-[94]" />
                            <div className='md:w-[200px]  md:h-[80px] w-[500px]'>
                                <p className='font-semibold text-[22px]'>{video.snippet.title}</p>
                            </div>
                        </li>
                       
                    </div>
                </>
            );
        });
        return list;
    };

    return (
        <div className=''>
            <ul className="list-none flex flex-col gap-6">
                {renderList()}
            </ul>
        </div>
    );
};



/*      
{
    "kind": "youtube#searchResult",
    "etag": "wkiEeNMMLJK2Do3HHCF5qH8yEfY",
    "id": {
        "kind": "youtube#video",
        "videoId": "BGTx91t8q50"
    },
    "snippet": {
        "publishedAt": "2023-01-08T09:53:31Z",
        "channelId": "UC59K-uG2A5ogwIrHw4bmlEg",
        "title": "Java Tutorial for Beginners 2023",
        "description": "Telusko Courses: Industry Ready Java Spring Microservices Developer Live : https://bit.ly/JavaMS2 Complete Java Developer ...",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/BGTx91t8q50/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/BGTx91t8q50/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/BGTx91t8q50/hqdefault.jpg",
                "width": 480,
                "height": 360
            }
        },
        "channelTitle": "Telusko",
        "liveBroadcastContent": "none",
        "publishTime": "2023-01-08T09:53:31Z"
    }
}*/