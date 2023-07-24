import {Container, Grid, Button} from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { getContent } from "../../actions/book";
import { Link, useParams } from "react-router-dom";

const Footer = ({ bookContent, getContent }) => {
  const bookId = useParams().id;
  useEffect(() => {
    getContent(bookId);
  }, [getContent, bookId]);
  console.log(bookContent.length)
  return (
    <div className="m-4">
      <Container>
        <Grid container spacing={0}>
            {bookContent.length?(
                <>
                {bookContent.map((content, index)=>{
                    return (
                        <Grid item xs={6} key={index}>
                            <img src={content} alt="" />
                        </Grid>
                    )
                })}
                </>
            ):(
                <h1>
                    There is no Content
                </h1>
            )}
        </Grid>
        <Link to="">
            <Button>Go Back</Button>
        </Link>
      </Container>
    </div>
  );
};

Footer.propTypes = {
  bookContent: PropTypes.array,
};
const mapStateToProps = (state) => ({
  bookContent: state.book.bookContent,
});

export default connect(mapStateToProps, { getContent })(Footer);
