import CommunityGuideLinesImg from "../../img/icons/guidLine-icon.svg";
import Dropdown from "./Dropdown";

const reviewsOptions = ["option-1", "option-2", "option-3", "option-4"];
const kudosOptions = ["option-1", "option-2", "option-3", "option-4"];
const flagOptions = ["option-1", "option-2", "option-3", "option-4"];

export default function CommunityGuideLines() {
  const reviewChange = () => {};
  const kudosChange = () => {};
  const flagChange = () => {};
  return (
    <div className="community-guide-lines-container">
      {/* =============================================================================== */}
      <div className="d-flex justify-content-between align-items-center p-2 p-md-5">
        <h1 className="capitalize fw-bold community-heading">
          community guide lines
        </h1>
        <img src={CommunityGuideLinesImg} alt="community-guide-lines" />
      </div>
      {/* =============================================================================== */}

      <div>
        <Dropdown
          id="reviews"
          label="reviews"
          onChange={reviewChange}
          options={reviewsOptions}
        />
        <Dropdown
          id="kudos"
          label="kudos"
          onChange={kudosChange}
          options={reviewsOptions}
        />
        <Dropdown
          id="flag"
          label="flag"
          onChange={flagChange}
          options={reviewsOptions}
        />
      </div>
      {/* =============================================================================== */}
      <div className="community-guide-lines-info-container rounded-5 p-3 p-md-5 text-justify m-3 m-md-5">
        <div>
          <p className="fw-semibold">
            At Move & Muse, we take pride in fostering a dynamic and inclusive
            dance community. It's our collective responsibility to keep our
            space welcoming and safe, where respect is the rhythm to our dance.
            Part of this shared effort is our content flagging system, designed
            to address content that may not align with our community values.
          </p>
        </div>
        {/* ===================== */}

        <div>
          <div>
            <h5 className="fw-semibold text-decoration-underline">
              What you can Flag
            </h5>
            <p style={{ fontWeight: "600" }}>
              Festivals, Reviews, Users, Other Magic Kudos
            </p>
          </div>
          {/* ===================== */}

          <div>
            <h5 className="fw-semibold">
              Flag content on Move & Muse when it:
            </h5>
            <ul>
              {[
                "Offends, belittles, or harasses any individual or group",
                "Spreads false information or engages in deceptive practices",
                "Violates someone’s privacy or shares personal details without consent",
                "Is considered spam or disrupts the community experience",
                "Promotes illegal activities or contravenes local laws",
              ].map((item, index) => (
                <li key={index} style={{ fontWeight: "600" }}>
                  {item}.
                </li>
              ))}
            </ul>
          </div>
          {/* ===================== */}
          <div  >
            <h5 className="fw-semibold">The Flagging Process</h5>
            <ol>
              {[
                {
                  label: "Flagging",
                  desc: "Use the flag icon to report content",
                },
                {
                  label: "Comment",
                  desc: "Provide a brief comment to give context to your flag, assisting our admin team in understanding the nuances of your concern",
                },
                {
                  label: "Review",
                  desc: "Carefully assess whether the content truly violates Move & Muse's community standards",
                },
                {
                  label: "Threshold System",
                  desc: "Content flagged by five distinct users will be temporarily hidden and queued for admin review *",
                },
                {
                  label: "Admin Review",
                  desc: "Our team evaluates the content impartially to determine adherence to community guidelines",
                },
                {
                  label: "Notification",
                  desc: "Flaggers will be informed of the admin's decision and the actions taken",
                },
              ].map((item, index) => (
                <li key={index}>
                  <strong>{item.label}</strong>: {item.desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* ===================== */}
        <div>
          <h5 className="fw-semibold">Our Commitment to Fair Moderation</h5>
          <ul>
            {[
              "Objective review is our cornerstone, ensuring impartiality in our decisions.",
              "We aim for prompt content reviews, appreciating your patience for thorough evaluations.",
              "Transparency guides us, and we endeavor to provide insights on content decisions.",
            ].map((item, index) => (
              <li key={index} style={{ fontWeight: "600" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* ===================== */}
        <div>
          <h5 className="fw-semibold">Consequences of Misuse</h5>
          <ul>
            {[
              "Inappropriate flagging, such as for personal disagreements, can lead to restrictions or penalties for the flagger.",
              "Repeat offenses of flagging misuse may result in further actions.",
            ].map((item, index) => (
              <li key={index} style={{ fontWeight: "600" }}>
                {item}.
              </li>
            ))}
          </ul>
        </div>
        {/* ===================== */}
        <div>
          <h5 className="fw-semibold">Community Support</h5>
          <ul>
            {[
              "We rely on your engagement to uphold Move & Muse's standards through judicious flagging.",
              "Should you have doubts about flagging, our detailed standards or support team can provide clarity.",
            ].map((item, index) => (
              <li key={index} style={{ fontWeight: "600" }}>
                {item}.
              </li>
            ))}
          </ul>
        </div>
        {/* ===================== */}
        <div>
          <div>
            <h5 className="fw-semibold ">
              Conclusion
            </h5>
            <p style={{ fontWeight: "600" }}>
              Your thoughtful flagging is integral to maintaining the ethos of
              Move & Muse. We're grateful for your diligence in protecting the
              integrity of our community. Together, let's continue to curate an
              environment where the spirit of dance lives on vibrantly.
            </p>
          </div>
        </div>
      </div>
      {/* =============================================================================== */}
    </div>
  );
}
