import { EPokeType } from "../../data/enums";
import ResultTypeItem from "../ResultTypeItem";
import styles from "./index.module.scss";

interface IResultTypeListProps {
  types: EPokeType[];
}

function ResultTypeList(props: IResultTypeListProps) {
  const { types } = props;
  return (
    <div className={styles["type-list"]}>
      {types.map((type, index) => (
        <ResultTypeItem key={index} type={type} />
      ))}
    </div>
  );
}

export default ResultTypeList;
