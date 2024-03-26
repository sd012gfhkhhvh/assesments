import { FC } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SectionItem {
  link_logo: string;
  link_title: string;
  sub_links: string[];
}

interface Menu {
  key?: number | string;
  section_title: string;
  section_items: SectionItem[];
}

export const Menu: FC<Menu> = ({ section_title, section_items }) => {
  return (
    <div>
      {/* section_title */}
      <p className="text-xs font-semibold text-[#9D9FA1] tracking-widest">
        {section_title}
      </p>

      {/* items */}
      <div>
        {section_items.map((section, index) => {
          return (
            <AccordianItem
              key={index}
              link_logo={section.link_logo}
              link_title={section.link_title}
              sub_links={section.sub_links} // array of links
            />
          );
        })}
      </div>
    </div>
  );
};

export const AccordianItem: FC<SectionItem> = ({
  link_logo,
  link_title,
  sub_links,
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={link_title}>
        <AccordionTrigger className="">
          {link_logo}
          {link_title}
        </AccordionTrigger>
        {sub_links &&
          sub_links.map((link) => {
            return (
              <AccordionContent>
                <a className="px-4">{link}</a>
              </AccordionContent>
            );
          })}
      </AccordionItem>
    </Accordion>
  );
};
