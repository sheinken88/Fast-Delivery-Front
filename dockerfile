# --- Build Stage ---
FROM node:16-alpine as build

# Declare build-time variables
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_CLOUDINARY
ARG NEXT_PUBLIC_CLOUDINARY_FOLDER
ARG NEXT_PUBLIC_CLOUD_NAME
ARG NEXT_PUBLIC_UPLOAD_PRESET

# Set the environment variables
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_CLOUDINARY=$NEXT_PUBLIC_CLOUDINARY
ENV NEXT_PUBLIC_CLOUDINARY_FOLDER=$NEXT_PUBLIC_CLOUDINARY_FOLDER
ENV NEXT_PUBLIC_CLOUD_NAME=$NEXT_PUBLIC_CLOUD_NAME
ENV NEXT_PUBLIC_UPLOAD_PRESET=$NEXT_PUBLIC_UPLOAD_PRESET

WORKDIR /app

# Copying package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build your application
RUN npm run build

# --- Run Stage ---
FROM node:16-alpine

WORKDIR /app

# Copying over the built artifacts from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./

# Set the runtime environment variables
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_CLOUDINARY=$NEXT_PUBLIC_CLOUDINARY
ENV NEXT_PUBLIC_CLOUDINARY_FOLDER=$NEXT_PUBLIC_CLOUDINARY_FOLDER
ENV NEXT_PUBLIC_CLOUD_NAME=$NEXT_PUBLIC_CLOUD_NAME
ENV NEXT_PUBLIC_UPLOAD_PRESET=$NEXT_PUBLIC_UPLOAD_PRESET

EXPOSE 3000

CMD [ "npm", "start" ]

