import Slider from "react-slick";
import SliderStyle from "./SliderStyle";
import Button from '@material-ui/core/Button';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Slide = () => {
  const classes = SliderStyle();
  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <div className={classes.container}>
      <div>
        <h1 className="Heading">What We Do</h1>
        <p className="about">We develop succcessful apps for our clients who range from startup
          <span className="span">entrepreneurs to Fortune 500s</span>
        </p>
      </div>
      <Slider {...settings}>
        <div className="slide-item">
          <div className="slide-inner">
            <span className="ImgContainer">
              <img src="assets/mac2.png" style={{ height: "300px" }} />
            </span>
            <div className="contentContainer">
              <h1 className="MainHeading">Web development</h1>
              <p> A Web application (Web app) is an application program that is stored on
              a remote server and delivered over the Internet through a browser iterface.
                Web services are Web apps by definition and many, although not all, websites contain Web apps</p>
              <Button variant="contained" color="secondary" className="ActiveBtn">
                read more
                <KeyboardArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div className="slide-inner">
            <span className="ImgContainer">
              <img src="assets/iphone.png" style={{ height: "300px" }} />
            </span>
            <div className="contentContainer">
              <h1 className="MainHeading">Mobile apps</h1>
              <p> A Web application (Web app) is an application program that is stored on
              a remote server and delivered over the Internet through a browser iterface.
                Web services are Web apps by definition and many, although not all, websites contain Web apps</p>
              <span className="readmoreWrapper">
                <Button variant="contained" color="secondary" className="ActiveBtn">
                  read more
                <KeyboardArrowRightIcon className="icon"/>

                </Button>
              </span>
            </div>
          </div>
        </div>
        <div className="slide-item">
          <div className="slide-inner">
            <span className="ImgContainer">
              <img src="assets/headphone.png" style={{ height: "300px" }} />
            </span>
            <div className="contentContainer">
              <h1 className="MainHeading">Cutting EDGE</h1>
              <p> A Web application (Web app) is an application program that is stored on
              a remote server and delivered over the Internet through a browser iterface.
                Web services are Web apps by definition and many, although not all, websites contain Web apps</p>
              <span className="readmoreWrapper">
                <Button variant="contained" color="secondary" className="ActiveBtn">
                  read more
                <KeyboardArrowRightIcon />

                </Button>
              </span>
            </div>

          </div>
        </div>

        <div className="slide-item">
          <div className="slide-inner">
            <span className="ImgContainer">
              <img src="assets/headphone.png" style={{ height: "300px" }} />
            </span>
            <div className="contentContainer">
              <h1 className="MainHeading">Web development</h1>
              <p> A Web application (Web app) is an application program that is stored on
              a remote server and delivered over the Internet through a browser iterface.
                Web services are Web apps by definition and many, although not all, websites contain Web apps</p>
              <span className="readmoreWrapper">
                <Button variant="contained" color="secondary" className="ActiveBtn">
                  read more
                <KeyboardArrowRightIcon />
                </Button>

              </span>
            </div>
          </div>
        </div>
      </Slider>
      <div className="btnWrapper">
        <Button variant="contained" color="secondary" className="projectbtn">
          View all projects
      </Button>
      </div>
    </div>
  );
}

export default Slide;