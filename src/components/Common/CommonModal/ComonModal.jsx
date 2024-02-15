
'use client';

import { Button, Checkbox, Label, Modal, TextInput, Select, Textarea } from 'flowbite-react';
import { useState } from 'react';


function ComonModal({ heading }) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='max-w-4xl'>
            <button onClick={() => setOpenModal(true)}>{heading}</button>
            <Modal className='bg-[#02001A33] backdrop-blur-[9px] text-black' dismissible show={openModal} onClose={() => setOpenModal(false)}>
                {/* <Modal.Header>{heading}</Modal.Header> */}
                <div className='flex justify-between items-center px-6 pt-3'>
                    <h1 className="font-bold ">{heading}</h1>
                    <button onClick={() => setOpenModal(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                        >
                            <path
                                d="M10.5578 10.7232L10.6354 10.636C10.998 10.2734 11.5699 10.2475 11.9625 10.5583L12.0497 10.636L16.9994 15.5858L21.9492 10.636C22.3118 10.2734 22.8836 10.2475 23.2762 10.5583L23.3634 10.636C23.726 10.9986 23.7519 11.5705 23.4411 11.9631L23.3634 12.0503L18.4136 17L23.3634 21.9497C23.726 22.3124 23.7519 22.8842 23.4411 23.2768L23.3634 23.364C23.0008 23.7266 22.4289 23.7525 22.0363 23.4417L21.9492 23.364L16.9994 18.4142L12.0497 23.364C11.687 23.7266 11.1152 23.7525 10.7227 23.4417L10.6354 23.364C10.2728 23.0014 10.2469 22.4295 10.5577 22.0369L10.6354 21.9497L15.5852 17L10.6354 12.0503C10.2728 11.6876 10.2469 11.1158 10.5578 10.7232Z"
                                fill="#212121"
                            />
                        </svg>
                    </button>
                </div>

                <Modal.Body>
                    <form>
                        <div className=" space-y-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Title" />
                                </div>
                                <TextInput id="title" type="text" required />

                            </div>
                            <div className='flex gap-x-5 mb-3'>
                                <div className="w-full ">
                                    <div className="mb-2 block">
                                        <Label value="Priority" />
                                    </div>
                                    <Select required>
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                    </Select>
                                </div>
                                <div className="w-full ">
                                    <div className="mb-2 block">
                                        <Label value="Type" />
                                    </div>
                                    <Select required>
                                        <option>Upcomming</option>
                                        <option>ToDo</option>
                                        <option>Ongoing</option>
                                        <option>Done</option>
                                    </Select>
                                </div>
                            </div>
                            <div className='flex gap-x-2'>
                                <div className="w-full">
                                    <Label value="Start Date" />
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                                        id=""
                                    />
                                    {/* {errors.dueDate && (
                                        <span className="text-red-500">This field is required</span>
                                    )} */}
                                </div>
                                <div className="w-full">
                                    <Label value="Due Date" />
                                    <input
                                        type="date"
                                        name="dueDate"
                                        className="py-3 pl-4 w-full border border-gray-300 mt-3 rounded-md"
                                        id=""
                                    />
                                    {/* {errors.dueDate && (
                                        <span className="text-red-500">This field is required</span>
                                    )} */}
                                </div>
                            </div>
                            {/* <div className='flex gap-x-5'>
                                <h1>Todo List: </h1>
                                <p>1.My Task</p>
                                <p>1.My Task</p>
                                <p>1.My Task</p>
                            </div> */}

                            {/* <div>
                                <TextInput id="todo" type="text" placeholder='Add Todo' required />

                            </div> */}
                            <div>
                                <Label className='mb-2 block' value="Add Members" ></Label>
                                <TextInput id="todo" type="text" required />
                            </div>
                            <div>
                                <Label className='mb-2 block' value="Description" ></Label>
                                <Textarea rows={4}></Textarea>
                            </div>
                            <div className='flex justify-end' >

                                <Button className='bg-[#50B577]' type="submit">Add New Task</Button>
                            </div>

                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default ComonModal;