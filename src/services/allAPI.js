import commonAPI from "./commonAPI"
import serverUrl from "./baseURL"


//upload video  API must called by Add compoenet
export const uploadVideoAPI = async (uploadVideo)=>{
   return await commonAPI("POST",`${serverUrl}/allVideos`,uploadVideo)
}

//get all videos API must called by view compoenent
export const getAllVideosAPI = async ()=>{
   return await commonAPI("GET",`${serverUrl}/allVideos`,"")
}

//store watch history Api must called by VideoCard
export const storeHistoryAPI = async (videoDetails)=>{
   return await commonAPI("POST",`${serverUrl}/history`,videoDetails)
}

//gethistory api must called history compoent
export const getHistoryAPI = async ()=>{
   return await commonAPI("GET",`${serverUrl}/history`,"")
}

//removehistoryAPI called history compoenet
export const removeHistoryAPI = async (historyId)=>{
   return await commonAPI("DELETE",`${serverUrl}/history/${historyId}`,{})
}

//remove video api called by videoCard compoenet
export const removeVideoAPI = async (videoId)=>{
   return await commonAPI("DELETE",`${serverUrl}/allVideos/${videoId}`,{})
}

//add category api
export const addCategoryAPI = async (categoryDetails)=>{
   return await commonAPI("POST",`${serverUrl}/categories`,categoryDetails)
}
// getallcategory api
export const getCategoryAPI = async ()=>{
   return await commonAPI("GET",`${serverUrl}/categories`,"")
}
//removecategory api
export const removeCategoryAPI = async (categoryId)=>{
   return await commonAPI("DELETE",`${serverUrl}/categories/${categoryId}`,{})
}

//get single video API 
export const getSingleVideoAPI = async (id)=>{
   return await commonAPI("GET",`${serverUrl}/allVideos/${id}`,"")
}

//update category api
export const updateCategoryAPI = async (categoryId,categoryDetails)=>{
   return await commonAPI("PUT",`${serverUrl}/categories/${categoryId}`,categoryDetails)
}

//get single category API called by View compoent
export const getSingleCategoryAPI = async (id)=>{
   return await commonAPI("GET",`${serverUrl}/categories/${id}`,"")
}