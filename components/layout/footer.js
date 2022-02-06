import Link from "next/link";

const FooterComponent = () => {
  const d = new Date();
  const year = d.getFullYear();
  return (
    <footer className="w3-container w3-theme-d5">
      <div className="w3-center">
        Copyright {year} Eve Star | All Rights Reserved |{" "}
        <Link href="/privacy">Privacy Policy</Link> | Site by Peter Krizovnik
      </div>
      <div className="w3-center">
        <a
          href="https://play.google.com/store/apps/collection/cluster?clp=igNAChkKEzgwNDEzMzkxNTMwOTY1MjAxMzYQCBgDEiEKG2Rldi5pdG1hZ2ljLnN0YWlyY2FsY3VsYXRvchABGAMYAQ%3D%3D:S:ANO1ljIMj2Y&gsr=CkOKA0AKGQoTODA0MTMzOTE1MzA5NjUyMDEzNhAIGAMSIQobZGV2Lml0bWFnaWMuc3RhaXJjYWxjdWxhdG9yEAEYAxgB:S:ANO1ljJEEBQ"
          title="Google play store"
        >
          <img src="/svg/google-play.svg" alt="google play store avatar" />
        </a>
        <a href="https://www.facebook.com/itmagic.dev/" title="Facebook">
          <img src="/svg/facebook.svg" alt="facebook avatar" />
        </a>
        <a href="https://www.instagram.com/jquerymobile/" title="Instagram">
          <img src="/svg/instagram.svg" alt="instagram avatar" />
        </a>
        <a
          href="https://www.youtube.com/channel/UC9AyPnSYFeW43RfUskUjCtw"
          title="YouTube"
        >
          <img src="/svg/youtube.svg" alt="youtube avatar" />
        </a>
        <a href="https://twitter.com/peter03051969" title="Twitter">
          <img src="/svg/twitter.svg" alt="twitter avatar" />
        </a>
        <a
          href="https://www.linkedin.com/in/peter-michelle-474628202/"
          title="LinkedIn"
        >
          <img src="/svg/linkedin.svg" alt="linkedIn avatar" />
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
