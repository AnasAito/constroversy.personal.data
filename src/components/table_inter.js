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
            to="/inter/inter2"
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
                      Mohamadou Lo
                    </div>
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                      <span class=" ">
                        Ex président de la Commission de protection des données
                        personnelles (CDP) au Sénégal
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
            to="/inter/test"
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
            to="/inter/test"
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
