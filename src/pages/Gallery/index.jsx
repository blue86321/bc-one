import React, { Component } from 'react'
import axios from 'axios'
import CardFeed from '../../components/CardFeed'
import FeedCard from '../../components/CardFeed/FeedCard'
import Share from '../../components/Share'
import './index.css'


export default class Gallery extends Component {

    state = {
        galleries : [],
    }

    getGallery = async () => {
        try {
            const url = "http://localhost:5000/v3/api/graphql/v1/v3/feed/en-INT,en-INT"
            const params = {
                "disableUsageRestrictions" : true,
                "filter[relationships.tags]" : "rrn:content:tags:6ea05270-f885-47cf-bd06-c761e9d9bdff:en-INT",
                "filter[type]" : "image-galleries",
                "sort" : "-meta.dateCreated",
                "spaces" : "redbull_com,rbtv",
                "rb3Schema" : "v1:cardList",
            }
            const res = await axios.get(url, {params})
            const galleries = res.data["data"].map(gallery => {
                const {
                    masterId:id,type,uriSlug,content,media,  // common
                } = gallery
                const {title,photoCount,standfirst:desc,tag} = content
                const {title:imageTitle,altText:imageAltText,imageEssence:{imageURL}} = media.mainImage
                if (tag) {
                    var {text:tagText} = tag
                }
                const newGalleryObj = {
                    id,type,uriSlug,title,photoCount,desc,tagText,
                    imageTitle,imageAltText,imageURL,
                }
                return newGalleryObj
            })
            this.setState({galleries})
        } catch {
            console.log("showing test data because not opening the proxy server.")
            this.setState({
                galleries : [
                    {"id":"b62f0893-731e-481a-8bd8-4bd2177035dd","type":"imageGallery","uriSlug":"red-bull-bc-one-world-final-2020-impressions","title":"Red Bull BC One 2020","photoCount":16,"desc":"A selection of images from the Red Bull BC One 2020 World Final at Hangar-7 in Salzburg, Austria, on November 28.","tagText":"Breaking","imageTitle":"Kastet and Shigekix are the Red Bull BC One champions of 2020","imageAltText":"Kastet and Shigekix high in the air with their well-deserved champion belts at Red Bull BC One in Hangar-7, Salzburg, Austria on Novemeber 28, 2020.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/11/29/obisxs9pirxdryi3xzab/red-bull-bc-one-champs-2020-incoming"},
                    {"id":"ab0770c1-33f5-4dd2-b5f8-8d16cbcc1ef7","type":"imageGallery","uriSlug":"technics-sl-1210mk7r-gallery","title":"The Technics SL-1200/1210MK7R Red Bull BC One limited edition","photoCount":4,"desc":"Photos of the special edition of the legendary Technics 1210 turntables, which goes to the winners of the 2020 Red Bull BC One E-Battle.","tagText":"Music","imageTitle":"The new Technics SL-1200/1210MK7R Red Bull BC One Limited Edition","imageAltText":"The direct drive turntable Technics SL-1210 MK7R Red Bull BC One limited edition.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2020/7/29/az1irss4m8lcmxaxdhn1/technics-sl-1210mk7r"},
                    {"id":"2133f01c-a5e6-4681-89da-f6f644d22cee","type":"imageGallery","uriSlug":"red-bull-bc-one-mumbai-photo-gallery","title":"The best moments from Red Bull BC One in Mumbai","photoCount":19,"desc":"Celebrate Red Bull BC One 2019 with this selection of photos from the Red Bull BC One Camp and World Final in Mumbai.","tagText":"Breaking","imageTitle":"Phil Wizard and Kazuki Rock met in a battle of creativity and had mad fun","imageAltText":"Phil Wizard and Kazuki Rock going head to head at Red Bull BC One 2019 in Mumbai.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/11/12/8313774a-d0ec-47a3-81cd-bcd648504761/red-bull-bc-one-mumbai-kazuki-rock-phil-wizard"},
                    {"id":"73b24cb9-c11a-47f3-ba45-c1b279848a4f","type":"imageGallery","uriSlug":"red-bull-bc-one-mumbai-city-takeover-photos","title":"Red Bull BC One takes over Mumbai","photoCount":9,"desc":"Images from the city walkabout by competitors ahead of the Red Bull BC One World Final 2019 in Mumbai, India on November 8, 2019.","tagText":"Breaking","imageTitle":"Bart from Brazil","imageAltText":"B-Boy Bart from Brazil poses for a photo in Mumbai, India ahead of the Red Bull BC One World Final 2019.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/11/08/4f88a4be-d4c4-4426-a6bf-f642ae724186/b-boy-bart-red-bull-bc-one-mumbai-street-breaking"},
                    {"id":"410c30e3-8945-4296-826e-0e48260e62e0","type":"imageGallery","uriSlug":"bc-one-cypher-cape-town-2019-gallery","title":"Check out the best moments of the BC One Cypher in Cape Town","photoCount":9,"desc":"A selection of the finest pictures from the BC One Cypher in Cape Town, South Africa.","tagText":"Breaking","imageTitle":"Judge Vouks does freeze during his showcase","imageAltText":"Vouks standing on one hand with legs crossed.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/05/08/e520dea9-d12e-4975-a985-60d6af32336d/bc-one-cypher-south-africa-2019-vouks"},
                    {"id":"fae85e17-de98-4a4b-bd8d-6eedcce552c9","type":"imageGallery","uriSlug":"bc-one-cypher-poland-2019-gallery","title":"The best shots from the Red Bull BC One Poland Cypher 2019","photoCount":9,"desc":"A selection of the finest moments from the Red Bull BC One Poland Cypher 2019.","tagText":"Breaking","imageTitle":"The venue for the Red Bull BC One Cypher in Krakow","imageAltText":"A branded dancefloor surrounded with spectators and two dancers battling at the Red Bull BC One Poland Cypher 2019.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/05/08/8ada5c46-dda2-490d-9e84-2daca5ef52c5/bc-one-cypher-krakow-2019-dancefloor"},
                    {"id":"74cd295d-ac89-4798-b817-6119fbd7efc1","type":"imageGallery","uriSlug":"bc-one-cypher-india-2019-gallery","title":"Check out the best of the Red Bull BC One India Cypher 2019","photoCount":10,"desc":"A selection of photos to show the special atmosphere of the 2019 Red Bull BC One India Cypher.","tagText":"Breaking","imageTitle":"B-Boy Soulsonic doing the threads in a freeze","imageAltText":"Soulsonic grabbing one foot while standing in a freeze on his head at the Red Bull BC One India Cypher 2019","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/05/08/c88f97c8-134e-41f5-b61d-34f4e6e3d866/bc-one-cypher-india-2019-soulsonic"},
                    {"id":"0cc473a2-131d-4fea-9f43-0b34628cb4f3","type":"imageGallery","uriSlug":"bc-one-camp-austria-2019-image-gallery","title":"These were the best moments from the 2019 Red Bull BC One Camp in Austria","photoCount":27,"desc":"For the second year, Red Bull BC One Camp Austria took place at the prestigious Volkstheater Vienna, which usually hosts ballet and opera. Dive in the atmosphere with this image gallery.","tagText":"Breaking","imageTitle":"The Volkstheater Vienna was the venue for the second camp in Austria","imageAltText":"Front view of the Volkstheater.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/04/14/c55c6594-fe55-4225-8843-e08664761bc9/bc-one-camp-austria-2019-volkstheater"},
                    {"id":"80837f3b-f8f1-4d23-9aee-525ddb02b6d7","type":"imageGallery","uriSlug":"bc-one-cypher-belgium-2019-image-gallery","title":"Relive the vibe from the Red Bull BC One Cypher Belgium 2019","photoCount":9,"desc":"These are the best photos from the Red Bull BC One Cypher Belgium 2019.","tagText":"Breaking","imageTitle":"The male competitors","imageAltText":"The male competitors at the Red Bull BC One Cypher Belgium 2019.","imageURL":"https://img.redbull.com/images/{op}/redbullcom/2019/03/19/0c864cb6-ef90-4fc9-b7dc-d3593ff058ce/bc-one-cypher-belgium-2019-groupshot"},
                ],
            })
        }
    }

    componentDidMount(){
        this.getGallery()
    }

    render() {
        return (
            <div className="gallery-wrapper">
                <div className="gallery">
                    <CardFeed>
                        {
                            this.state.galleries.map(gallery => <FeedCard {...gallery}/>)
                        }
                    </CardFeed>
                </div>
                <Share/>
            </div>
        )
    }
}
