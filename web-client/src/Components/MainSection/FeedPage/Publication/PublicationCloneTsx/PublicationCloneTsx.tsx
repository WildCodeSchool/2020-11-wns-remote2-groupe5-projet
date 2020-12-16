import { logRoles } from '@testing-library/react';
import { LOADIPHLPAPI } from 'dns';
import React, { useState } from 'react';
import { LanguageServiceMode } from 'typescript';
import './PublicationCloneTsx.css';

export default function PublicationCloneTsx() {
  return (
    <div className="lg:p-10 xl:p-10 bg-gray-300 space-y-5 flex items-center justify-center ">
      <section className="p-1 m-10">
        <div className="flex bg-black text-white justify-between rounded-tl rounded-tr p-4">
          <div className="flex items-center justify-around">
            <div className="px-4">
              <img
                className="rounded-full h-16 w-16 flex items-center justify-center"
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="avatar"
              />
            </div>
            <div>
              <div>
                <span>Pseudo</span>
                <span className="italic underline">S abonner</span>
              </div>
              <div>Date | #Communauté tag</div>
            </div>
          </div>
          <div className="font-bold text-5xl mx-2 leading-3">...</div>
        </div>
        <article className="flex bg-white rounded-br rounded-bl">
          <div className="w-4/5 mx-auto py-3">
            <img
              className="rounded w-4/5 mx-auto"
              src="https://img-19.ccm2.net/QeOmxQpB5sfw25JvsKbirn-eulw=/250x/6aab65a776614b8bba8c8b4e8c1848c9/ccm-encyclopedia/0px-Unofficial_JavaScript_logo_2.svg.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between text-center">
            <div className="p-5">
              <h3 className="font-bold uppercase">titre de larticle</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="w-1/2 self-end py-3 rounded-tl rounded-br bg-black text-white hover:bg-white hover:text-black font-semibold">
              Lire la suite
              <span>fleche</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
