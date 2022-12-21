import styles from './layout.module.css';
import Header from "./header/header";
import Main from "./main/main";

export default function Layout({ header, main }) {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}
