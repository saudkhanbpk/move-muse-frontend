import LineIcon from "../../img/icons/line-icon.svg";

const guideSteps = [
  "We see musing about dance like a generous flow of sap! But for our blog posts we are inviting you to share the maple syrup thoughts that can heal hearts, or trigger profound conversations in our communities. Therefore please enjoy the playground of 500 words.",
  "Decide whether you would like to publish it under your name or as a MnM community member.",
  "Need more time to finish your musings? Save your draft on your desktop as a Notepad or Word document to continue working on it later. Even if it happens that the topic is no longer available once you are back, feel free to email us to see what can be done / submit it under your own topic.",
  "Add up to 5 tags to make it easier for others to find your article.",
  "Once the team confirms the final version of the article, you will be invited to add an audio recording of yourself reading your musings. Our community voices need to be heard!",
];

export default function MusingGuide() {
  return (
    <div className="px-1 px-sm-5">
      <img src={LineIcon} alt="line" className="img-fluid mb-5" />
      <div style={{ color: "#545454" }}>
        <h1 className="fw-bold pb-5 px-2">Musing Guide</h1>
        <ol>
          {guideSteps?.map((guide, index) => (
            <li key={index} style={{fontWeight:600}}>{guide}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
