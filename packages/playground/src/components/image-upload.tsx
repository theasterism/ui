/** biome-ignore-all lint/a11y/noRedundantAlt: shut up! */
import { Button } from "orphos/button";
import { useFileUpload } from "orphos/hooks/use-file-upload";
import { UserCircleIcon } from "orphos/icons";

export function ImageUploadDemo() {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({
      accept: "image/*",
    });

  const previewUrl = files[0]?.preview || null;
  const fileName = files[0]?.file.name || null;

  return (
    <div className="flex items-center gap-2">
      <div className="inline-flex items-center gap-2 align-top">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border-subtle border-dashed bg-background-element">
          {previewUrl ? (
            <img
              className="size-full object-cover"
              src={previewUrl}
              alt="Preview of uploaded image"
              width={96}
              height={96}
            />
          ) : (
            <div aria-hidden="true">
              <UserCircleIcon className="size-4 opacity-60" />
            </div>
          )}
        </div>
        <div className="relative inline-block">
          <Button size="sm" onClick={openFileDialog} aria-haspopup="dialog">
            Upload
          </Button>
          <input
            {...getInputProps()}
            className="sr-only"
            aria-label="Upload image file"
            tabIndex={-1}
          />
        </div>
      </div>
      {fileName && (
        <div className="inline-flex gap-2 text-xs">
          <Button
            onClick={() => removeFile(files[0]?.id || "")}
            variant="ghost"
            size="sm"
            aria-label={`Remove ${fileName}`}>
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}
