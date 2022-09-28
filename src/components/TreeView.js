import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import styled from "styled-components";
import { Card } from "./Card";

const TreeData = {
  title: "Product",
  left: {
    title: "Beverages 1 ",
    collapsed: true,
    id: "01",
    left: {
      title: "Water",
      id: "b01",
      collapsed: true,
      left: {
        collapsed: true,
        title: "Leaf Node",
      },
      right: {
        collapsed: true,
        title: "Leaf Node",
      },
    },
    right: {
      title: "Coffee",
      id: "b01",
      collapsed: true,
      left: {
        title: "Leaf Node",
        collapsed: true,
      },
      right: {
        title: "Leaf Node",
        collapsed: true,
      },
    },
  },

  right: {
    title: "Bevarages 2",
    collapsed: true,
    id: "02",
    left: {
      title: "Water",
      id: "b02",
      collapsed: true,
      left: {
        title: "Leave Node",
        collapsed: true,
      },
      right: {
        title: "Leave Node",
        collapsed: true,
      },
    },
    right: {
      title: "Coffee",
      id: "b02",
      collapsed: true,

      left: {
        title: "Leaf Node",
        collapsed: true,
      },
      right: {
        title: "Leaf Node",
        collapsed: true,
      },
    },
  },
};

const StyledNode = styled.div`
  padding: 5px;
  border-radius: 8px;
  display: inline-block;
  border: 2px solid grey;
  width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  padding: 8px;
  background-color: #f5f5f5;
`;

export const SubTree = ({ node }) => {
  const [data, setData] = useState(node.collapsed);

  if (node.left || node.right) {
    return (
      <TreeNode
        label={
          <Card
            title={node.title}
            id={node.id}
            handleClick={() => setData(!data)}
          />
        }
      >
        {!data && node.left && <SubTree node={node.left} />}
        {!data && node.right && <SubTree node={node.right} />}
      </TreeNode>
    );
  }

  return <TreeNode label={node.title} />;
};

export const TreeDataView = () => {
  return (
    <Tree
      // label={<div>Locations</div>}
      lineWidth={"2px"}
      lineColor={"green"}
      lineBorderRadius={"10px"}
    >
      <SubTree node={TreeData} />
    </Tree>
  );
};
