import { Button, Form, Input, Select } from 'antd'
import React from 'react'
import { TODO_LEVELS, TODO_STATUS } from '../../config/todo';
import { useMutation } from '@tanstack/react-query';
import todoService from '../../service/todo-service';

const CreateTodoForm = () => {
  const [form] = Form.useForm();

  const { isLoading, mutate } = useMutation({
    mutationKey: "create-todo",
    mutationFn: (data) => todoService().createTodo(data),
    onSuccess: ({ data }) => {
      console.log("data crated : ", data);
    },
    onError: (error) => {
      console.error("ERROR :: create course ::", error);
      toast.error("Please try Again!!")
    },
    retry: false,
  })

  const handleOnSubmit = (todo) => {
    const data = {
      title: todo?.title,
      description: todo?.description,
      level: todo?.level,
      status: todo?.status,
    }
    mutate(data);
  }
  return (
    <div className="bg-turnary p-6 rounded-lg">
      <Form
        layout="vertical"
        form={form}
        initialValues={{ level: "easy", status: "pending" }}
        onFinish={handleOnSubmit}
      >
        <Form.Item
          name="title"
          label={<span className="text-primary font-medium">Todo Title</span>}
          rules={[{ required: true, message: "Title must be required" }]}
        >
          <Input placeholder="Title" showCount count={{ max: 50 }} />
        </Form.Item>

        <Form.Item
          name="description"
          label={
            <span className="text-primary font-medium">Todo Description</span>
          }
          rules={[{ required: true, message: "Description must be required" }]}
        >
          <Input.TextArea
            placeholder="Todo description"
            showCount
            count={{ max: 100 }}
          />
        </Form.Item>

        <div className="flex items-center space-x-8">
          <Form.Item
            className="w-full"
            name="level"
            label={<span className="text-primary font-medium">Todo Level</span>}
          >
            <Select options={TODO_LEVELS} className="w-full" />
          </Form.Item>

          <Form.Item
            className="w-full"
            name="status"
            label={
              <span className="text-primary font-medium">Todo Status</span>
            }
          >
            <Select options={TODO_STATUS} className="w-full" />
          </Form.Item>
        </div>

        <div className="flex items-center justify-end">
          <Button
            htmlType="submit"
            className="px-6 rounded-full ring-0"
            type="primary"
          // loading={isLoading}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CreateTodoForm