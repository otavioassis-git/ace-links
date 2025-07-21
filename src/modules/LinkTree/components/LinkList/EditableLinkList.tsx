import { Button, IconButton } from "@mui/material";
import { LinkListContainer, StyledList } from "./LinkList.styles";
import AddIcon from "@mui/icons-material/Add";
import { useEditableLinkTree } from "../../hooks/EditableLinkTreeHook";
import { AddLinkDialog } from "../AddLinkDialog/AddLinkDialog";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableLinkItem } from "../SortableLinkItem/SortableLinkItem";
import EditIcon from "@mui/icons-material/Edit";

export const EditableLinkList: React.FC = () => {
  const { data } = useEditableLinkTree();
  const [openAddLinkDialog, setOpenAddLinkDialog] = useState(false);

  if (!data) return null;

  const { links: initialLinks } = data;

  const [links, setLinks] = useState(structuredClone(initialLinks));

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    console.log("inside handleDragEnd");
    console.log(active, over);

    if (over && active.id !== over.id) {
      setLinks((currentLinks) => {
        const oldIndex = currentLinks.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = currentLinks.findIndex((item) => item.id === over.id);
        return arrayMove(currentLinks, oldIndex, newIndex);
      });
    }
  }

  return (
    <LinkListContainer>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={data.links.map((link) => link.id)}
          strategy={verticalListSortingStrategy}
        >
          <StyledList>
            {links.map((link, index) => (
              <SortableLinkItem
                key={`edit-link-button-${index}`}
                index={index}
                link={link}
              >
                <IconButton>
                  <EditIcon />
                </IconButton>
              </SortableLinkItem>
            ))}
          </StyledList>
        </SortableContext>
      </DndContext>
      <Button
        sx={{ width: "auto" }}
        startIcon={<AddIcon />}
        onClick={() => setOpenAddLinkDialog(true)}
      >
        Add link
      </Button>
      <AddLinkDialog
        open={openAddLinkDialog}
        onClose={() => setOpenAddLinkDialog(false)}
      />
    </LinkListContainer>
  );
};
