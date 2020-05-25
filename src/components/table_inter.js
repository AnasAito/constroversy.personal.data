import React from "react";

export default function TableInter() {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        <li>
          <a
            href="#"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div class="text-sm  leading-5 font-medium text-indigo-600 truncate">
                      Raymond Onuhua
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <span class="truncate ">
                        Research/ teaching fellow Information Communications
                      </span>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div class="text-sm leading-5 text-gray-900">
                        Date :<time datetime="2020-01-07">January 7, 2020</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQHsk7YfgneOug/profile-displayphoto-shrink_800_800/0?e=1596067200&v=beta&t=-aUFB2xa3OKb9tKlNgG6TQTuyiTMXvo83LMQmErXyWs"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div class="text-sm  leading-5 font-medium text-indigo-600 truncate">
                      Mathilda Tanon
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <span class="truncate ">
                        Juriste en protetion des données personnelles
                      </span>
                    </div>
                  </div>
                  <div class="hidden md:block">
                    <div>
                      <div class="text-sm leading-5 text-gray-900">
                        Date :<time datetime="2020-01-07">January 7, 2020</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg
                  class="h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}
