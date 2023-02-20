import {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle
} from "react";
import "jquery.terminal/css/jquery.terminal.min.css";
const jquery = require("jquery");
const terminal = require("jquery.terminal");
const $ = terminal(jquery, this);

export type TerminalT = ReturnType<typeof $.fn.terminal>;
type TerminalProps = { [key: string]: any };

export const Terminal = forwardRef<TerminalT, TerminalProps>(
  ({ interpreter, ...props }, ref) => {
    const [term, setTerm] = useState();
    const termRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
      if (termRef?.current) {
        const term = $(termRef.current).terminal(interpreter, props);
        setTerm(term);
      }
    }, [term, termRef, interpreter, props]);
    useImperativeHandle(ref, () => term, [term]);
    return <div ref={termRef}></div>;
  }
);