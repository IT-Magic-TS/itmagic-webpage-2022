import Link from "next/link";

function AlertPrivacy({ privacyHandler }) {
  return (
    <div className="w3-center alert-privacy">
      <div className="w3-panel w3-yellow message">
        <p>
          This site uses cookies. By continuing to browse the site, you are
          agreeing to our use of cookies.
        </p>
        <button onClick={privacyHandler} className="w3-btn w3-green">
          OK
        </button>
        <Link href="/privacy">
          <a className="w3-btn w3-margin w3-border w3-border-blue">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
}

export default AlertPrivacy;
