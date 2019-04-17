// @flow strict-local

import * as React from "preact";

import { type Shortcut } from "../shared/keyboard";

type Props = {|
  mac: boolean,
  shortcut: $Shape<Shortcut>,
|};

export default function KeyboardShortcut({ mac, shortcut }: Props) {
  const { key = "" } = shortcut;
  return (
    <span className="KeyboardShortcut">
      {shortcut.cmd && (
        <kbd title={mac ? "Command" : undefined}>{mac ? "⌘" : "Cmd"}</kbd>
      )}
      {shortcut.ctrl && (
        <kbd title={mac ? "Control" : undefined}>{mac ? "^" : "Ctrl"}</kbd>
      )}
      {shortcut.alt && (
        <kbd title={mac ? "Option/Alt" : undefined}>{mac ? "⌥" : "Alt"}</kbd>
      )}
      {hasShift(shortcut) && (
        <kbd title={mac ? "Shift" : undefined}>{mac ? "⇧" : "Shift"}</kbd>
      )}
      {key !== "" && <kbd>{key.length === 1 ? key.toUpperCase() : key}</kbd>}
    </span>
  );
}

export function hasShift(shortcut: Shortcut): boolean {
  const { key = "" } = shortcut;
  return key.length === 1
    ? // For printable keys, guess that Shift is used for uppercase letters.
      key.toLowerCase() !== key.toUpperCase() && key.toUpperCase() === key
    : shortcut.shift;
}