
import Card from "./components/card";


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    datePosted: "5 days ago",
    postTag: "Full Time",
    hourlyCharge: 45,
    location: "Mumbai, India",
    post: "Frontend Engineer",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    postTag: "Part Time",
    hourlyCharge: 30,
    location: "Pune, India",
    post: "Backend Developer",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/832/502/png-clipart-amazon-logo-text-brand-amazon-text-service-thumbnail.png",
    companyName: "Amazon",
    datePosted: "7 days ago",
    postTag: "Full Time",
    hourlyCharge: 50,
    location: "Hyderabad, India",
    post: "Full Stack Developer",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "1 day ago",
    postTag: "Full Time",
    hourlyCharge: 55,
    location: "Bangalore, India",
    post: "UI/UX Designer",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://images.seeklogo.com/logo-png/32/2/tesla-logo-png_seeklogo-329764.png",
    companyName: "Tesla",
    datePosted: "4 days ago",
    postTag: "Part Time",
    hourlyCharge: 35,
    location: "Delhi, India",
    post: "Data Analyst",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
    companyName: "Adobe",
    datePosted: "6 days ago",
    postTag: "Full Time",
    hourlyCharge: 40,
    location: "Chennai, India",
    post: "Graphic Designer",
    tag2: "Senior Level",
  },
  {
    brandLogo: "https://cdn.dribbble.com/userupload/33963595/file/original-d495a191be6f3c0e7f106e8363598ec9.png?resize=400x0",
    companyName: "Meta",
    datePosted: "3 days ago",
    postTag: "Part Time",
    hourlyCharge: 32,
    location: "Kolkata, India",
    post: "Mobile App Developer",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!1XDp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb162f2d8-7878-4f8c-9b3f-6184293024dc_1000x1000.jpeg",
    companyName: "IBM",
    datePosted: "9 days ago",
    postTag: "Full Time",
    hourlyCharge: 42,
    location: "Ahmedabad, India",
    post: "Cloud Engineer",
    tag2: "Senior Level"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png",
    companyName: "Wipro",
    datePosted: "8 days ago",
    postTag: "Part Time",
    hourlyCharge: 28,
    location: "Nagpur, India",
    post: "Support Engineer",
    tag2: "Junior Level"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/020/190/476/non_2x/infosys-logo-infosys-icon-free-free-vector.jpg",
    companyName: "Infosys",
    datePosted: "10 days ago",
    postTag: "Full Time",
    hourlyCharge: 38,
    location: "Jaipur, India",
    post: "Software Tester",
    tag2: "Senior Level"
  }
];


return (

  <div className="parent">

    {
      jobOpenings.map(function(ele , idx){
        return <div key={idx}>
       <Card  company = {ele.companyName} post={ele.post} tag1={ele.postTag} tag2={ele.tag2} location = {ele.location} date={ele.datePosted} brandlogo= {ele.brandLogo} pay={ele.hourlyCharge}/>
      </div>
      })
    }
      
  </div>
)






}
export default App;
