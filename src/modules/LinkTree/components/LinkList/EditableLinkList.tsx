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
import { EditLinkDialog } from "../EditLinkDialog/EditLinkDialog";

export const EditableLinkList: React.FC = () => {
  const { data, setData } = useEditableLinkTree();
  const [openAddLinkDialog, setOpenAddLinkDialog] = useState(false);
  const [openEditLinkDialog, setOpenEditLinkDialog] = useState(false);
  const [selectedLink, setSelectedLink] = useState<Link>();

  if (!data) return null;

  const { links } = data;

  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setData((oldData) => {
        if (!oldData) return undefined;
        const currentLinks = oldData.links;
        const oldIndex = currentLinks.findIndex(
          (item) => item.id === active.id
        );
        const newIndex = currentLinks.findIndex((item) => item.id === over.id);
        return {
          ...oldData,
          links: arrayMove(oldData.links, oldIndex, newIndex).map(
            (link, index) => {
              return { ...link, rank: index + 1 };
            }
          ),
        };
      });
    }
  }

  const openEditLinkDialogHandler = (link: Link) => {
    setSelectedLink(link);
    setOpenEditLinkDialog(true);
  };

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
                <IconButton onClick={() => openEditLinkDialogHandler(link)}>
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
      {selectedLink && (
        <EditLinkDialog
          open={openEditLinkDialog}
          onClose={() => setOpenEditLinkDialog(false)}
          link={selectedLink}
        />
      )}
      <AddLinkDialog
        open={openAddLinkDialog}
        onClose={() => setOpenAddLinkDialog(false)}
      />
    </LinkListContainer>
  );
};
