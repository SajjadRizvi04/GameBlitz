import "./SupportedSports.css"
import styled from "styled-components"

export function SupportedSports(){
    const SPORTS= [
        {
            name:"Football",
            img:"gameblitz\\src\\components\\home\\supported sports\\utilities\\images\\41932.jpg"
        },
        {
            name:"Cricket",
            img:""
        },
        {
            name:"Volleyball",
            img:""
        },
        {
            name:"Basketball",
            img:""
        },
        
        
    ]

    return<>
        <section className="supported-sports-template">
            <h2 className="supported-sports-title">Sports</h2>
            <div className="sport-list-supported">
                {
                    SPORTS.map((sport)=>{
                        <IndividualSportCard/>
                    })
                }
            </div>
        </section>
    </>
}


function IndividualSportCard({sport}){

    return <>
        <section className="dividual-sport-card-template">
            <SportThumbnail background={sport.img}/>
            <div className="sport-dets">
                <span>{sport.name}</span>
            </div>
        </section>
    </>
}


const SportThumbnail = styled.div`
    background:url(${(props) => (props.background)});
    background-position:center;
    background-size:cover;
`
