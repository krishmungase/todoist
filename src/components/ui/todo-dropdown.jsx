import { Button, Dropdown } from 'antd'
import React from 'react'
import { AiOutlineEllipsis } from 'react-icons/ai'

const TodoStatusDropdown = ({ todo, refetchTodoList }) => {
  const items = [
    {
      key: "1",
      label: (
        <button >
          Pending
        </button>
      ),
    },
    {
      key: "2",
      label: (
        <button >
          In Progress
        </button>
      ),
    },
    {
      key: "3",
      label: (
        <button>
          Completed
        </button>
      ),
    },
  ];
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      arrow
    >
      <Button className="flex items-center justify-center" >
        {todo.status}
        <span className="ml-2">
          <AiOutlineEllipsis />
        </span>
      </Button>
    </Dropdown>
  )
}

export default TodoStatusDropdown