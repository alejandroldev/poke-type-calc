import { css } from "../../utils";
import styles from "./index.module.scss";

interface IResultTypeItemProps {
  type: string;
}

function ResultTypeItem(props: IResultTypeItemProps) {
  const { type } = props;
  return <div className={styles[`type-${css(type)}`]}>{type}</div>;
}

export default ResultTypeItem;
