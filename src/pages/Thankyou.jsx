import { Link } from "react-router-dom";

export default function Thankyou() {
  return (
    <section className="mt-70 mb-70">
        <div className="container">
        <div className="thankyou-mid">
            <span>
            <svg
                width="71"
                height="71"
                viewBox="0 0 71 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                cx="35.5001"
                cy="35.5"
                r="27.4"
                fill="white"
                stroke="#3B2319"
                stroke-width="2"
                />
                <rect width="71" height="71" stroke="" />
                <path
                d="M48.7367 22.0194C48.7106 22.0261 48.6844 22.0362 48.6582 22.0463C48.4391 22.1033 48.2493 22.2475 48.1348 22.4488L31.0203 49.6604L19.2443 38.765C19.0382 38.4967 18.6947 38.3793 18.3709 38.4665C18.047 38.5537 17.8082 38.8321 17.7592 39.1709C17.7101 39.5097 17.8606 39.8452 18.1452 40.0263L30.6278 51.6194C30.811 51.7838 31.0563 51.8576 31.2984 51.8207C31.5404 51.7838 31.753 51.6429 31.8839 51.4316L49.548 23.3612C49.741 23.0794 49.7508 22.7071 49.5741 22.4152C49.3975 22.1234 49.0671 21.9691 48.7367 22.0194Z"
                fill="#3B2319"
                />
            </svg>
            </span>
            <h2>Thank you, enjoy!</h2>
            <p className="inbox-t">We’ ve sent the download to your inbox.</p>
            <Link to={"/"} className="primary-btn">
            Back Home
            </Link>
            <p className="mt-70">If you have any issues contact us.</p>
        </div>
        </div>
    </section>
  );
}
