import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamePrompt } from "../store/gameSlice";
import { useParams } from "react-router-dom";

const GameScreen = () => {
  const dispatch = useDispatch();
  const { plotPoint, PathOptions} = useSelector(state => state.game.game)
  const { storypromptId } = useParams();

  useEffect(() => {
    dispatch(getGamePrompt(storypromptId))
  }, [dispatch, ])
  console.log(PathOptions)

  return(
    <div>
      <h3 className="gs-title">Llama Drama</h3>
      <p className="prompt-container">{plotPoint}</p>
      {PathOptions.map(po => {
        return <button className="options-btn" onClick={() => console.log('NextPromptId', po.NextPromptId)} key={po.id}>{po.Option}</button>
      })}
    </div>
  )
}

export default GameScreen;
