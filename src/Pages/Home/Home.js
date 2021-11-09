import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Categories from "../../Data/Categories";
import { useState, } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({name,setName, fetchQuestions}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true);
            return;
        }
        else{
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("/quiz");
        }
    }
  return (
    <div className="content">
      <div className="settings">
        <span className="settings-text">Quiz Settings</span>
        <div className="settings__select">
        {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            className="textField"
            select
            label="Select Category"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            className="textField"
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
              <MenuItem key="Easy" value="Easy">
                  Easy
               </MenuItem>
               <MenuItem key="Medium" value="Medium">
                  Medium
               </MenuItem>
               <MenuItem key="Hard" value="Hard">
                  Hard
               </MenuItem>

          </TextField>
          <Button onClick={handleSubmit} variant="contained" color="primary" size="large">
            Start Quiz
          </Button>

        </div>
      </div>

      <img src="/quizbanner.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
