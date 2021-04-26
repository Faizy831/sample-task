import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    // padding: 20,
    maxWidth: "80%",
    width: "100%",
    margin: "0 auto",
    "& .Heading": {
      textAlign: "center",
      color: "white",
      fontFamily: "'Roboto', sans-serif",
      fontSize: 60,
      margin: 0,
    },
    "& .about": {
      color: "white",
      fontSize: 20,
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 300,
      textAlign: "center",
      "& .span": {
        display: "block",
      }
    },
    "& .slick-list": {
      padding: "30px 0px !important"
    },
    "& .slick-track": {
      display: "flex",
      flexDirection: "row",
    },
    "& .slick-slide": {
      height: "auto",
      borderRadius: 10,
      "& div": {
        height: "100%",
        width: "100%",
        borderRadius: 3,
      }
    },
    "& .slide-item": {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      outline: "none",
    },
    "& .slide-inner": {
      opacity: 0.9,
      "& .ImgContainer": {
        backgroundColor: "#e75480",
        display: "flex",
        justifyContent: "center",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
      },
      "& .contentContainer": {
        textAlign: "center",
        width: "100%",
        maxWidth: 300,
        margin: "0 auto",
        padding: 20,
        "& .MainHeading": {
          fontFamily: "'Roboto', sans-serif"
        },
        "& p": {
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 300,
          width: 300,
        },
        "& .readmoreWrapper": {
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          "& .icon": {
            fontSize: 18,
          }
        },
        "& .ActiveBtn": {
          display: 'none',

        }
      }
    },
    "& .slick-track .slide-item": {
      display: "flex !important",
      width: "100% !important",
      height: "100% !important",
    },
    "& .slick-track .slide-item .slide-inner": {
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      width: "100%",
      height: "100% ",
    },

    "& .slick-slide.slick-active.slick-current + .slick-active .slide-inner": {
      backgroundColor: "white",
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px !important",
      margin: "-20px -0px",
      zIndex: 9999,
      position: "relative",
      width: "calc(100% + 40px)",
      height: "calc(100% + 40px)",
      opacity: 1,
    },
    "& .slick-active.slick-current + .slick-active .ActiveBtn": {
      display: "flex",
      justifyContent: "center",
      fontSize: 12,
      borderRadius: 30,
      alignItems: "center",

    },
    "& .slick-prev": {
      left: -120,
      "&:before": {
        color: "red !important"
      }
    },
    "& .slick-next": {
      right: -120,
      "&:before": {
        color: "red !important"
      }
    },
    "& .btnWrapper": {
      display: "flex",
      justifyContent: "center",
      paddingTop: 20,
      "& .projectbtn": {
        borderRadius: 30,
        fontSize: 10,
        padding: "8px 20px",
      }
    }
  }
}));

export default useStyles