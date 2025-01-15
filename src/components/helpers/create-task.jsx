import { Button, Drawer } from 'antd'
import { LucideChevronRightCircle } from 'lucide-react';
import React, { useState } from 'react'
import { IoMdAddCircleOutline } from 'react-icons/io'
import CreateTodoForm from '../forms/create-todo-form';

const CreateTodo = ({ refetchTodoList }) => {
  const [drawerState, setDrawerState] = useState(false);
  const onCloseDrawer = () => setDrawerState(false);
  const onOpenDrawer = () => setDrawerState(true);

  return (
    <div className="relative">
      <Button
        className="ring-0 right-0 px-6 bg-primary hover:bg-primary/80 rounded-full"
        type="primary"
        onClick={onOpenDrawer}
        icon={<IoMdAddCircleOutline />}
      >
        Todo
      </Button>
      <Drawer
        width={450}
        closeIcon={<LucideChevronRightCircle className="text-primary size-5" />}
        open={drawerState}
        onClose={onCloseDrawer}
        title={<span className="text-primary">Create Todo</span>}
      >
        <CreateTodoForm
          refetchTodoList={refetchTodoList}
          onCloseDrawer={onCloseDrawer}
        />
      </Drawer>
    </div>
  )
}

export default CreateTodo