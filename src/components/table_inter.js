import React from "react";
import { Link } from "react-router-dom";
export default function TableInter() {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        <li>
          <Link
            to="/inter/inter3"
            href="#"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://en.unesco.org/inclusivepolicylab/sites/default/files/pictures/picture-1557-1536827564.png"
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
                        Chercheur assistant , Lagos Business School, Nigeria
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
          </Link>
        </li>
        <li>
          <Link
            to="/inter/inter1"
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
          </Link>
        </li>

        <li>
          <Link
            to="/inter/inter4"
            href="#"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div class="text-sm  leading-5 font-medium text-indigo-600 truncate">
                      Helmut Sorge
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <span class="truncate ">
                        Professeur en géopolitique et relations internationales
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
          </Link>
        </li>
        <li>
          <Link
            to="/inter/inter5"
            href="#"
            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
          >
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="min-w-0 flex-1 flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="https://i2.wp.com/www.ict4africa.net/wp-content/uploads/2020/05/boris-pacome-houphouet.jpg?fit=1200%2C762&ssl=1"
                    alt=""
                  />
                </div>
                <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <div class="text-sm  leading-5 font-medium text-indigo-600 truncate">
                      Boris Pacôme Houphouet
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <span class="truncate ">
                        Juriste et consultant en protection des données à
                        caractère personnel
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
          </Link>
        </li>
      </ul>
    </div>
  );
}
