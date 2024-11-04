import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVideoAPI } from '../services/allAPI'

const View = ({uploadVideoResponse,removeVideoResponseFromCategory,setRemoveCategoryVideoResponseFromView}) => {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse,removeVideoResponseFromCategory])

  //get all videos
  const getAllVideos = async ()=>{
    const result = await getAllVideosAPI()
    console.log(result);    
    if(result.status>=200 && result.status<300){
      setAllVideos(result.data)
    }
  }
  console.log(allVideos);

  const dragOverView = e =>{
    e.preventDefault()
  }
  const videoDropFromCategory = async (e)=>{
    const {categoryId,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(`Video dropped inside View Component, with video id: ${video.id} from category id : ${categoryId}`);
    //delete video from category
    //get category details to be updated
    const {data} = await getSingleCategoryAPI(categoryId)
    console.log(data);
    //update its allVideos after removing specific video tobe dragged
    const updatedCategoryVideoList = data?.allVideos?.filter(item=>item.id!=video.id)
    console.log(updatedCategoryVideoList);
    const {id,categoryName} = data
    //save the changes permanently by calling api
    const result = await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryVideoList})
    // share response to category componet
    setRemoveCategoryVideoResponseFromView(result)
    //add removed video to allVideos api
    await uploadVideoAPI(video)
    // display all video in view
    getAllVideos()
  }
  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>videoDropFromCategory(e)} >
        {
          allVideos.length>0 ?
            allVideos?.map(video=>(
              <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4} >
                <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} displayData={video}/>
              </Col>
            ))
          :
          <div className='fw-bolder text-danger'>Nothing to display!!!</div>
        }
      </Row>
    </>
  )
}

export default View