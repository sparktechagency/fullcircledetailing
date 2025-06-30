
import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast";
import { useGetSettingApiQuery, usePostSettingApiMutation } from "../../../../redux/dashboardFeatures/setting/dashboardSettingApi";


const AboutUs = () => {
  const [content, setContent] = useState('');
  const editor = useRef(null);

const [postSettingApi] = usePostSettingApiMutation()
const { data: privacyData } = useGetSettingApiQuery({ type: "About Us" });
const privaciAndPolicyData = privacyData?.data;
const aboutContent = privacyData?.data?.[0]?.text;


console.log(content)

useEffect(()=>{
if(aboutContent){
  setContent(aboutContent)
}
},[aboutContent])



const handleUpdate = async () => {
  const formData = new FormData();
  formData.append("type", "About Us");
  formData.append("text", content);


//  formData.forEach((value, key) => {
//   console.log(key, value);
// });


  try {
    const res = await postSettingApi(formData).unwrap();
   if(res?.status === true){
    toast.success(res?.message)
   }
  } catch (error) {
    console.log(error);
  }
};



  return (
    <>
      <div className="w-full mt-6">
        <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
      </div>

      <div className="flex justify-end ">
        <Button
          htmlType="submit"
          style={{ backgroundColor: "#0063E5", color: "white", fontFamily: "degularDisplay", padding: "24px 80px", fontSize: "16px", fontWeight: "bold", margin: "10px 0px" }}
          onClick={handleUpdate}
        >
          Save
        </Button>
      </div>

    </>
  )
}

export default AboutUs



