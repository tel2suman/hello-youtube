
const GOOGLE_API_KEY = "AIzaSyDkgg8JOAH9UOF6yHr9lCBp0BZ-66g7_Vk";

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+ GOOGLE_API_KEY;


export const YOUTUBE_COMMENTS_API = 
    "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=" + GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = 
    "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyDkgg8JOAH9UOF6yHr9lCBp0BZ-66g7_Vk&q=";

