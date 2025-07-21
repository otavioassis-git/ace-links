import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { IconButton } from "@mui/material";
import { LinkItem } from "../LinkItem/LinkItem";
import {
  EditSectionContainer,
  SortableLinkItemContainer,
} from "./SortableLinkItem.styles";
import DragHandleIcon from "@mui/icons-material/DragHandle";

type SortableLinkItemProps = {
  link: Link;
  index: number;
  children: React.ReactNode;
};

export const SortableLinkItem: React.FC<SortableLinkItemProps> = ({
  link,
  index,
  children,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: link.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : "auto",
    boxShadow: isDragging ? "0 4px 8px rgba(0,0,0,0.2)" : "none",
  };

  return (
    <SortableLinkItemContainer ref={setNodeRef} style={style}>
      <LinkItem noRedirect link={link} index={index} />
      <EditSectionContainer key={`edit-link-button-${index}`}>
        {children}
        <IconButton
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
          sx={{ cursor: "grab" }}
        >
          <DragHandleIcon />
        </IconButton>
      </EditSectionContainer>
    </SortableLinkItemContainer>
  );
};
