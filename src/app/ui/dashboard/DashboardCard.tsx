import React from "react";
import { DBPost } from "../../api/types/post.type";

export const DashboardCard: React.FC<DBPost> = ({ post, scheduleDateTime }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="mt-8 grid grid-cols-1 gap-8 max-w-[70ch] mx-auto">
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-white shadow-sm hover:shadow-lg transition duration-200">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#5b37eb] to-[#37eba9] "></span>

          <p className="text-sm text-gray-500 line-clamp-2 text-left">
            {post.specificContent.shareCommentary}
          </p>

          <div className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <span className="text-sm font-medium text-gray-600">
                {post.lifecycleState}
              </span>
              <span className="text-xs text-gray-500">
                {scheduleDateTime?.toLocaleString() ?? "Not Scheduled"}
              </span>
            </div>
            <div className="flex gap-4 flex-grow items-end justify-end">
              <button className="rounded">edit</button>
              <button className="rounded">delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
