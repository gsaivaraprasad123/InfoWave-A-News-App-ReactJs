export default function News(props) {

    console.log(props);
    return (

        <div className="news">

            <div className="news-img">

                {
                    props.article.urlToImage !== null ?
                        <img src={props.article.urlToImage} alt="" /> :
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS91m6ebsOjGv2JPysDEqV3OFhuPuG2hjsV9A&usqp=CAU " alt="" />

                }

                <img src={props.article.urlToImage} alt="" />
            </div>

            <h5>{props.article.title}</h5>

            <p>{props.article.description?.substring(0, 100).concat("...")}<a href={props.article.url} target="blank">View More</a></p>



            <div className="source">
                <p>Author: {props.article.source.name}</p>
                <p>{props.article.source.name}</p>
            </div>

        </div>


    )
}