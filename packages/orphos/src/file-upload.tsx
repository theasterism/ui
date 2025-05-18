import { useCallback, useRef, useState } from "react";
import { CloudArrowUpIcon, DocumentIcon, XMarkIcon } from "./icons";
import type { InputProps } from "./input";
import { cn } from "./utils";

function FileUpload({ disabled, ...props }: InputProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handles the file selection from the input
  const handleFileChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setSelectedFile(file);
        setFileName(file.name);
      }
    },
    []
  );

  // Handles the click on the icon button (Upload/Clear)
  const handleIconClick = useCallback(() => {
    if (selectedFile) {
      // Clear the file
      setSelectedFile(null);
      setFileName("");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Reset the file input element
      }
    } else {
      // Trigger file input click
      fileInputRef.current?.click();
    }
  }, [selectedFile]);

  // Handles click on the main component body to trigger file input
  const handleContainerClick = useCallback(() => {
    if (!selectedFile && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, [selectedFile]);

  // Handles keyboard interaction for accessibility
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if ((event.key === "Enter" || event.key === " ") && !selectedFile) {
        event.preventDefault(); // Prevent page scroll on space
        fileInputRef.current?.click();
      }
    },
    [selectedFile]
  );

  return (
    <div className="flex w-full flex-col items-start">
      <div
        className={cn(
          "no-drag inset-ring-1 inset-ring-border-element flex h-9 w-full cursor-default items-center justify-between rounded-md bg-transparent px-3 py-2 text-sm text-sm ring-focus-ring/35 focus-visible:inset-ring-focus-ring focus-visible:outline-none focus-visible:ring-3 aria-disabled:cursor-not-allowed aria-disabled:bg-background-element/50 aria-disabled:text-foreground-subtle aria-disabled:opacity-75 overflow-hidden"
        )}
        onClick={handleContainerClick}
        tabIndex={disabled ? -1 : 0} // Only focusable when no file is selected
        onKeyDown={handleKeyDown}
        // @ts-expect-error shut up!
        type="button"
        aria-disabled={disabled}
        aria-pressed={!!selectedFile}
        aria-label={
          selectedFile ? `Selected file: ${fileName}` : "Select a file"
        }>
        <div className="flex items-center mr-2 min-w-0">
          {selectedFile ? (
            <DocumentIcon
              className="mr-2 h-4 w-4 flex-shrink-0 text-foreground-subtle"
              aria-hidden="true"
            />
          ) : (
            <span className="text-foreground-subtle text-sm truncate">
              {fileName || "No file selected"}
            </span>
          )}
          {selectedFile && (
            <span className="truncate text-foreground text-sm" title={fileName}>
              {fileName}
            </span>
          )}
        </div>
        <button
          type="button"
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation(); // Prevent container click event
            handleIconClick();
          }}
          className={cn(
            "peer ml-auto flex size-5 flex-shrink-0 items-center justify-center rounded-sm text-foreground-subtle ring-focus-ring ring-offset-1 ring-offset-transparent transition-colors hover:text-foreground focus:z-10 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
          )}
          aria-label={
            selectedFile ? "Clear selected file" : "Upload a new file"
          }>
          {selectedFile ? (
            <XMarkIcon aria-hidden="true" />
          ) : (
            <CloudArrowUpIcon aria-hidden="true" />
          )}
        </button>
      </div>

      {/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: shut up! */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        aria-hidden="true" // Hidden from assistive technologies as interaction is handled by the visible parts
        disabled={disabled}
        {...props}
      />
    </div>
  );
}

export { FileUpload };
