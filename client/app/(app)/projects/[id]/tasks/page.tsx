"use client";

import axiosInstance from "@/app/axiosInstance";
import { useAlertsContext } from "@/app/lib/contexts/AlertContext";
import { useAuthContext } from "@/app/lib/contexts/AppContext";
import { useIsClient } from "@/app/lib/contexts/useIsClient";
import { SelectInput, TextInput } from "@/components/formElements";
import TextAreaInput from "@/components/formElements/TextAreaInput";
import { Form, Formik } from "formik";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import TaskCard from "../components/TaskCard";

export default function TasksPage() {
  const [tasks, setTasks] = useState<Array<any> | null>();
  const [participants, setParticipants] = useState<Array<any> | null>();
  const pathname = usePathname();
  const isClient = useIsClient();
  const { addAlert, dismissAlert } = useAlertsContext();
  const { user } = useAuthContext();

  const showModal = (id: string) => {
    isClient && (document.getElementById(id) as HTMLDialogElement).showModal();
  };

  const closeModal = (id: string) => {
    isClient && (document.getElementById(id) as HTMLDialogElement).close();
  };

  const fetchTasks = async (id: string) => {
    try {
      const res = await axiosInstance.get(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`,
      );

      if (res.status === 200) {
        setTasks(res.data);
      }
    } catch (error) {
      setTasks(null);
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      values.deadline = new Date(values.deadline).toISOString();

      const res = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${pathname.split("/")[2]}`,
        values,
      );

      if (res.status === 201) {
        fetchTasks(pathname.split("/")[2]);
        const id = addAlert({
          message: "Task added successful",
          severity: "success",
        });
        setTimeout(() => {
          dismissAlert(id);
        }, 3000);
      }
    } catch (error: any) {
      const id = addAlert({
        message:
          error?.response?.data?.message ||
          "Failed to add task. Please try again.",
        severity: "error",
      });
      setTimeout(() => {
        dismissAlert(id);
      }, 3000);
    } finally {
      closeModal("add_task_modal");
    }
  };

  const handleStatusChange = async (id: string) => {
    try {
      const res = await axiosInstance.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`,
      );

      if (res.status === 200) {
        fetchTasks(pathname.split("/")[2]);
        const id = addAlert({
          message: "Task status changed successful",
          severity: "success",
        });
        setTimeout(() => {
          dismissAlert(id);
        }, 3000);
      }
    } catch (error: any) {
      const id = addAlert({
        message:
          error?.response?.data?.message ||
          "Failed to change task status. Please try again.",
        severity: "error",
      });
      setTimeout(() => {
        dismissAlert(id);
      }, 3000);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/tasks/${id}`,
      );

      if (res.status === 200) {
        fetchTasks(pathname.split("/")[2]);
        const id = addAlert({
          message: "Task deleted successful",
          severity: "success",
        });
        setTimeout(() => {
          dismissAlert(id);
        }, 3000);
      }
    } catch (error: any) {
      const id = addAlert({
        message:
          error?.response?.data?.message ||
          "Failed to delete task. Please try again.",
        severity: "error",
      });
      setTimeout(() => {
        dismissAlert(id);
      }, 3000);
    }
  };

  useEffect(() => {
    const fetchParticipants = async (id: string) => {
      try {
        const res = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/projects/${id}/participants`,
        );

        if (res.status === 200) {
          setParticipants(res.data);
        }
      } catch (error) {
        setParticipants(null);
      }
    };

    if (pathname) {
      fetchTasks(pathname.split("/")[2]);
      fetchParticipants(pathname.split("/")[2]);
    }
  }, [pathname]);

  return (
    <>
      <div className="space-y-3">
        <div className="flex justify-end">
          <button
            className="btn btn-primary"
            onClick={() => showModal("add_task_modal")}
          >
            Add Task
          </button>
        </div>

        <h4>All tasks</h4>

        <div className="space-y-3">
          {tasks && tasks.length > 0 ? (
            tasks.map((task, index) => {
              return (
                <TaskCard
                  key={index}
                  task={task}
                  handleStatusChange={handleStatusChange}
                  handleDelete={handleDelete}
                  isOwner={user?.id === task?.project?.organization?.owner?.id}
                />
              );
            })
          ) : (
            <p className="text-center italic">No tasks found</p>
          )}
        </div>
      </div>

      {/* Add task dialog */}
      <dialog id="add_task_modal" className="modal">
        <div className="prose modal-box rounded-md lg:prose-lg">
          <h3>Add task</h3>

          <Formik
            initialValues={{
              title: "",
              description: "",
              deadline: "",
              assignedToId: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string()
                .required("Title is required")
                .min(5, "Title must be at least 5 characters long"),
              description: Yup.string()
                .required("Description is required")
                .max(100, "Description must not exceed 100 characters"),
              deadline: Yup.date()
                .required("Deadline is required")
                .min(new Date(), "Start date must be greater than today"),
              assignedToId: Yup.string().required("Assigned to id is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              handleSubmit(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  label="Title"
                  props={{
                    name: "title",
                    type: "text",
                  }}
                />

                <TextAreaInput
                  label="Description"
                  props={{
                    name: "description",
                    rows: 5,
                    placeholder: "Enter task description",
                  }}
                />

                <TextInput
                  label="Deadline"
                  props={{
                    name: "deadline",
                    type: "date",
                  }}
                />

                {participants && participants.length > 0 ? (
                  <SelectInput
                    label="Assign To"
                    props={{
                      name: "assignedToId",
                    }}
                  >
                    <option value="">Unassigned</option>
                    {participants.map((participant, index) => {
                      return (
                        <option key={index} value={participant.user.id}>
                          {`${participant.user.firstName} ${participant.user.lastName}`}
                        </option>
                      );
                    })}
                  </SelectInput>
                ) : (
                  <span className="mb-2 italic">
                    There are no participants in this project. Review some
                    application to choose participants.
                  </span>
                )}

                <div className="flex w-full items-center justify-end gap-2">
                  <button
                    disabled={isSubmitting}
                    type="reset"
                    className="btn btn-outline"
                    onClick={() => closeModal("add_task_modal")}
                  >
                    Cancel
                  </button>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </dialog>
    </>
  );
}
