export const deleteMessageDialog = (
  mode: "board" | "task",
  name: string
): string => {
  if (mode === "board")
    return `Are you sure you want to delete the '${name}' board? This action will remove all columns and tasks and cannot be reversed.`;
  else
    return `Are you sure you want to delete the '${name}' task? and its subtasks? This action cannot be reversed.`;
};
