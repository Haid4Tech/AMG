import { coreValues } from "@/common/data";
import CoreValuesCard from "./core-value-card";
import { Badge } from "@/components/ui/badge";
import { pagePadding } from "@/common/styles";
import { cn } from "@/lib/utils";

const CoreValues = () => {
  return (
    <div className={cn("space-y-6", pagePadding)}>
      <Badge variant={"amg"}>Core values</Badge>
      <div className="grid grid-cols-1 gap-4">
        {coreValues.map((value, index) => (
          <CoreValuesCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
