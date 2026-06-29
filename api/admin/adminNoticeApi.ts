import axiosInstance from "@/api/axiosInstance";
import {AdminNoticeInputType} from "@/schemas/notice/adminNoticeSchema";
import { Notice } from "@/types/notice";


const createNotice = async (input: AdminNoticeInputType) => {
    const response = await axiosInstance.post("/admin/notice/create", input);
    return response.data;
}

const updateNotice = async (id: number, input: AdminNoticeInputType): Promise<Notice> => {
    const response = await axiosInstance.patch(`/admin/notice/${id}`, input);
    return response.data.data;
}

const deleteNotice = async (id: number): Promise<void> => {
    await axiosInstance.delete(`/admin/notice//${id}`);
}

export default {
    createNotice,
    deleteNotice,
    updateNotice,
};