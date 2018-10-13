// @flow

// TODO: Move these types somewhere.
import type {
  Box,
  ElementType,
  ElementTypes,
  HintMeasurements,
} from "../worker/ElementManager";
import type { Durations, LogLevel, TimeTracker } from "../shared/main";

import type {
  HintsMode,
  KeyboardAction,
  KeyboardMapping,
  KeyboardMode,
  KeyboardShortcut,
} from "./KeyboardShortcuts";

export type FromBackground =
  | {|
      type: "ToWorker",
      message: ToWorker,
    |}
  | {|
      type: "ToRenderer",
      message: ToRenderer,
    |}
  | {|
      type: "ToPopup",
      message: ToPopup,
    |}
  | {|
      type: "FirefoxWorkaround",
    |};

export type ToBackground =
  | {|
      type: "FromWorker",
      message: FromWorker,
    |}
  | {|
      type: "FromRenderer",
      message: FromRenderer,
    |}
  | {|
      type: "FromPopup",
      message: FromPopup,
    |};

export type FromWorker =
  | {|
      type: "WorkerScriptAdded",
    |}
  | {|
      type: "KeyboardShortcutMatched",
      action: KeyboardAction,
      timestamp: number,
    |}
  | {|
      type: "NonKeyboardShortcutMatched",
      shortcut: KeyboardShortcut,
      timestamp: number,
    |}
  | {|
      type: "Keyup",
      shortcut: KeyboardShortcut,
    |}
  | {|
      type: "ReportVisibleFrame",
    |}
  | {|
      type: "ReportVisibleElements",
      elements: Array<ElementReport>,
      numFrames: number,
      durations: Durations,
    |}
  | {|
      type: "ReportUpdatedElements",
      elements: Array<ElementReport>,
      rects: Array<Box>,
    |}
  | {|
      type: "ReportTextRects",
      rects: Array<Box>,
    |}
  | {|
      type: "Interaction",
    |}
  | {|
      type: "ClickedElementRemoved",
    |}
  | {|
      type: "ClickedLinkNavigatingToOtherPage",
    |}
  | {|
      type: "PageLeave",
    |}
  | {|
      type: "WindowBlur",
    |};

export type ToWorker =
  | {|
      type: "StateSync",
      logLevel: LogLevel,
      clearElements: boolean,
      keyboardShortcuts: Array<KeyboardMapping>,
      keyboardMode: KeyboardMode,
      oneTimeWindowMessageToken: string,
    |}
  | {|
      type: "StartFindElements",
      types: ElementTypes,
    |}
  | {|
      type: "UpdateElements",
      words: Array<string>,
    |}
  | {|
      type: "GetTextRects",
      indexes: Array<number>,
      words: Array<string>,
    |}
  | {|
      type: "FocusElement",
      index: number,
    |}
  | {|
      type: "ClickElement",
      index: number,
      trackRemoval: boolean,
    |}
  | {|
      type: "SelectElement",
      index: number,
      trackRemoval: boolean,
    |}
  | {|
      type: "OpenNewTab",
      url: string,
      foreground: boolean,
    |}
  | {|
      type: "Escape",
    |}
  | {|
      type: "TrackInteractions",
      track: boolean,
    |}
  | {|
      type: "ReverseSelection",
    |};

export type FromRenderer =
  | {|
      type: "RendererScriptAdded",
    |}
  | {|
      type: "Rendered",
      durations: Durations,
      firstPaintTimestamp: number,
    |};

export type ToRenderer =
  | {|
      type: "StateSync",
      logLevel: LogLevel,
    |}
  | {|
      type: "Render",
      elements: Array<ElementWithHint>,
    |}
  | {|
      type: "UpdateHints",
      updates: Array<HintUpdate>,
      enteredTextChars: string,
    |}
  | {|
      type: "RotateHints",
      forward: boolean,
    |}
  | {|
      type: "RenderTextRects",
      rects: Array<Box>,
      frameId: number,
    |}
  | {|
      type: "Peek",
    |}
  | {|
      type: "Unpeek",
    |}
  | {|
      type: "UnrenderTextRects",
    |}
  | {|
      type: "Unrender",
      mode:
        | {| type: "immediate" |}
        | {| type: "delayed" |}
        | {| type: "title", title: string |},
    |};

export type FromPopup =
  | {|
      type: "PopupScriptAdded",
    |}
  | {|
      type: "ResetPerf",
    |};

export type ToPopup = {|
  type: "PopupData",
  logLevel: LogLevel,
  data: ?{|
    tabId: number,
    tabState: TabState,
  |},
|};

export type ElementReport = {|
  type: ElementType,
  index: number,
  hintMeasurements: HintMeasurements,
  url: ?string,
  title: ?string,
  text: string,
  textWeight: number,
  isTextInput: boolean,
|};

export type ExtendedElementReport = {|
  ...ElementReport,
  frame: {|
    id: number,
    index: number,
  |},
  hidden: boolean,
|};

export type ElementWithHint = {|
  ...ExtendedElementReport,
  weight: number,
  hint: string,
|};

export type HintUpdate =
  | {|
      type: "Hide",
      index: number,
      hidden: true,
    |}
  | {|
      type: "UpdateContent",
      index: number,
      order: number,
      matchedChars: string,
      restChars: string,
      highlighted: "yes" | "no" | "temporarily",
      hidden: boolean,
    |}
  | {|
      type: "UpdatePosition",
      index: number,
      order: number,
      hint: string,
      hintMeasurements: HintMeasurements,
      highlighted: "yes" | "no", // "temporarily" not supported.
      hidden: boolean,
    |};

export type TabState = {|
  hintsState: HintsState,
  preventOverTypingTimeoutId: ?TimeoutID,
  perf: Array<{|
    timeToFirstPaint: number,
    topDurations: Durations,
    collectDurations: Array<{| url: string, durations: Durations |}>,
    renderDurations: Durations,
  |}>,
|};

export type HintsState =
  | {|
      type: "Idle",
    |}
  | {|
      type: "Collecting",
      mode: HintsMode,
      pendingElements: PendingElements,
      startTime: number,
      time: TimeTracker,
      durations: Array<{| url: string, durations: Durations |}>,
      timeoutId: ?TimeoutID,
    |}
  | {|
      type: "Hinting",
      mode: HintsMode,
      startTime: number,
      time: TimeTracker,
      durations: Array<{| url: string, durations: Durations |}>,
      enteredHintChars: string,
      enteredTextChars: string,
      elementsWithHints: Array<ElementWithHint>,
      updateState: UpdateState,
    |};

export type UpdateState =
  | {|
      type: "Waiting",
      startTime: number,
    |}
  | {|
      type: "Timeout",
      timeoutId: TimeoutID,
    |};

export type PendingElements = {|
  pendingFrames: {|
    answering: number,
    collecting: number,
  |},
  elements: Array<ExtendedElementReport>,
|};
